import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
       index("routes/home.tsx"),
       route("univers", "routes/univer.tsx"),
         route("service", "routes/service.tsx"),

] satisfies RouteConfig;
