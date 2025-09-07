import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'success',
    message: 'API endpoint is working',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    return NextResponse.json({
      status: 'success',
      message: 'Data received successfully',
      data: body
    })
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Invalid JSON' },
      { status: 400 }
    )
  }
}
