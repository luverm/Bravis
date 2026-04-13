import { createCmsApiHandler } from "shovel-cms/api";

export const dynamic = "force-dynamic";

const handler = createCmsApiHandler();

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
