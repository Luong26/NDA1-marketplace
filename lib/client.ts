import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
const secretKey = process.env.TW_SECRET_KEY;

// const clientId = "7349d7f2b2cfde25b0c1087eafc06bf3";
// const secretKey = "tUzRqM4vucws2E8Ldj-PqanMRhYvtW_WNVcixULgnyfcGC7apliJ3gIy_-Jkn_7VkcEeQVpBj8tdHAFV3C7_uA";

if (!clientId) {
  throw new Error("Client ID not set");
}

export default createThirdwebClient(secretKey ? { secretKey } : { clientId });
