import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
       index("routes/home.tsx"),
       route("univers", "routes/univer.tsx"),
       route("service", "routes/service.tsx"),
       route("service/event", "Compement/Service/detail/event.tsx"),
       route("service/prod", "Compement/Service/detail/prod.tsx"),
       route("service/print", "Compement/Service/detail/print.tsx"),
       route("service/pact", "Compement/Service/detail/pact.tsx"),
       
       

] satisfies RouteConfig;
