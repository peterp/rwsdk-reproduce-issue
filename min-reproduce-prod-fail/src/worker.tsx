import { defineApp, ErrorResponse } from "rwsdk/worker";
import { route, render, prefix } from "rwsdk/router";
import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
import { setCommonHeaders } from "@/app/headers";
import { userRoutes } from "@/app/pages/user/routes";
import { sessions, setupSessionStore } from "./session/store";
import { Session } from "./session/durableObject";
import { db, setupDb } from "./db";
import type { User } from "@prisma/client";
import { env } from "cloudflare:workers";
export { SessionDurableObject } from "./session/durableObject";

export type AppContext = {
  session: Session | null;
  user: User | null;
};

export default defineApp([
  render(Document, [
    route("/", Home),
    // route("/", () => new Response("Hello, World!")),
    // route("/protected", [
    //   ({ ctx }) => {
    //     if (!ctx.user) {
    //       return new Response(null, {
    //         status: 302,
    //         headers: { Location: "/user/login" },
    //       });
    //     }
    //   },
    //   Home,
    // ]),
    // prefix("/user", userRoutes),
  ]),
]);
