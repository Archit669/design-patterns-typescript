import { DataParser, JSONParser, XMLParser } from "./DataParser";

function clientCode(dataParser: DataParser): void {
    dataParser.parseData();
  }
  
  console.log("Parsing JSON data:");
  clientCode(new JSONParser());
  console.log("");
  
  console.log("Parsing XML data:");
  clientCode(new XMLParser());