import fs from "node:fs";
import { z } from "zod";

const schema = z.object({
	title: z.string(),
	id: z.number(),
	values: z.array(z.union([z.string(), z.number()])),
});

type Data = z.infer<typeof schema>;

function output(data: Data) {
	console.log("Title:", data.title);
}

const content = JSON.parse(fs.readFileSync("data.json").toString());

const parsed = schema.parse(content);
output(parsed);
