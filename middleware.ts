import { NextRequest, NextResponse } from 'next/server';

const VALID_ROLES = {
  USER: 'user',
} as const;

const PERMISSIONS: Record<keyof typeof VALID_ROLES, string[]> = {
  USER: [
    'welcome'
  ]
};


const ROUTE_PERMISSIONS: Record<string, string> = {
  '/welcome': 'welcome',
};

const AUTH_ROUTES = [
  '/login',
  '/register',
  '/sign-up',
  '/2fa',
  '/forget-password',
  '/password-reset',
  '/verify-otp',
  '/password',
  '/',
];


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userRole = request.cookies.get('role')?.value as
    | keyof typeof VALID_ROLES
    | undefined;

  // Redirect unauthenticated users on protected routes
  const isProtected = Object.keys(ROUTE_PERMISSIONS).some((route) =>
    pathname.startsWith(route)
  );
  if (!userRole || !VALID_ROLES[userRole]) {
    if (isProtected) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', encodeURIComponent(request.url));
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }


  // Redirect authenticated users away from auth routes
  if (AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/welcome', request.url));
  }

  // Authorization check
  const permissionKey = Object.keys(ROUTE_PERMISSIONS).find((route) =>
    pathname.startsWith(route)
  );
  if (permissionKey) {
    const requiredPermission = ROUTE_PERMISSIONS[permissionKey];
    const allowedPermissions = PERMISSIONS[userRole] || [];
    if (!allowedPermissions.includes(requiredPermission)) {
      return NextResponse.rewrite(new URL('/welcome', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
