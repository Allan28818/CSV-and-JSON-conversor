import { clearTheJSON } from "./ConversorsFiles/ConvertToJson";
import { clearTheCSV } from "./ConversorsFiles/JSON/JoinTheCampsAndValues";

function cleanTheInputs()
{
 clearTheCSV();
 clearTheJSON();
}

export default cleanTheInputs;