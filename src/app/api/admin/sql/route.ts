import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'

export async function POST(request: Request) {
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const { query } = await request.json()
    if (!query || query.trim() === '') {
      return NextResponse.json({ error: 'SQL query cannot be empty' }, { status: 400 })
    }

    const trimmedQuery = query.trim().toLowerCase()
    
    // We run $queryRawUnsafe for SELECT, SHOW, EXPLAIN queries
    const isQuery = 
      trimmedQuery.startsWith('select') || 
      trimmedQuery.startsWith('show') || 
      trimmedQuery.startsWith('explain') || 
      trimmedQuery.startsWith('describe') ||
      trimmedQuery.startsWith('with')

    let result
    if (isQuery) {
      result = await prisma.$queryRawUnsafe(query)
    } else {
      const affected = await prisma.$executeRawUnsafe(query)
      result = [{ message: `Query executed successfully. Affected rows: ${affected}` }]
    }

    return NextResponse.json({ success: true, result })
  } catch (error: any) {
    console.error('SQL Execution Error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Unknown database error occurred during execution.' 
    })
  }
}
