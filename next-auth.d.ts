import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    error?: any;
    user?: {
      name: string;
      email: string;
      profilePic: string;
      sub: string;
      accessToken: string;
      token_type: string;
      scope: string;
      hasUsedTrial?: boolean;
      refresh_token: string;
      id: string;
      patreonId: string;
      role: "admin" | "patreon_user";
      Subscription: {
        subscriptionId: string;
        subscriptionStatus: string;
      };
    };
    token?: string;
  }

  interface Profile {
    data: {
      attributes: {
        about: string | null;
        gender: number;
      };
    };
    id: string;
    name?: string;
    email?: string;
    image?: string;
  }
}
