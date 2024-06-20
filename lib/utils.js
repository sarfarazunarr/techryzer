const { authOptions } = require("../app/api/auth/[...nextauth]/route");
const { getServerSession } = require("next-auth");
const base = process.env.BASE_URL;

export const getUserSession = async () => {
    const session = await getServerSession(authOptions)
    const sessionJSON = JSON.stringify(session, null, 2);
    const sessionData = JSON.parse(sessionJSON);
    const type = sessionData.user.account_type;
    const name = sessionData.user.name;
    const email = sessionData.user.email;
    const id = sessionData.user.id;
    const data = {name, email, id, type};
    return data;
}

export async function fetchApiData(path) {
    const base = process.env.BASE_URL
    const res = await fetch(base + path)
    const data = await res.json()
    return data;
  }