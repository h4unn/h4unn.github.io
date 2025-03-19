import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// data.json 파일 경로 설정
const dataFilePath = path.join(__dirname, "src", "data", "project.json");

// data.json 파일 읽기
const data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

// 각 프로젝트의 id 값을 uuid로 변경
data.forEach((project) => {
  project.id = uuidv4();
});

// 변경된 데이터를 다시 data.json 파일에 쓰기
fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
