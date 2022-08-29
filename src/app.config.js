import { env } from "process";

export default {
    publicPath: env.NODE_ENV === "dev" ? "" : "/mall",
	mongodb: {
		host: env.NODE_ENV === "dev" ? "101.201.116.232" : "127.0.0.1",
		password: "123456",
		port: 27017,
		username: "root"
	}
};