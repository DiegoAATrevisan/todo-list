import { createContext } from "react";
import { taskProps } from "../@types/tasks";

export const ContextoTarefas = createContext<taskProps[]>([])

