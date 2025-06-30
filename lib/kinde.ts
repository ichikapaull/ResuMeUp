import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";

type Env = {
  Variables: {
    user: KindeUser<Record<string, any>>;
  };
};

export const getAuthUser = createMiddleware<Env>(async (c, next) => {
  try {
    console.log("🔐 Authentication check started...");
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    console.log("🔍 Is authenticated:", isUserAuthenticated);
    
    if (!isUserAuthenticated) {
      console.log("❌ User not authenticated");
      throw new HTTPException(401, {
        res: c.json({ error: "unauthorized" }),
      });
    }
    const user = await getUser();
    console.log("👤 Retrieved user:", { id: user?.id, email: user?.email });
    c.set("user", user);
    await next();
  } catch (error) {
    console.error("🚨 Auth error:", error);
    throw new HTTPException(401, {
      res: c.json({ error: "unauthorized" }),
    });
  }
});
