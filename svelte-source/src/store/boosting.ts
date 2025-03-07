import { writable } from "svelte/store";
import type { IContracts, ISaledContract } from "../@types/boosting";

export const contracts = writable<IContracts[]>([]);
export const startedContracts = writable<IContracts>(null);

let contractsStore: IContracts[];
let startedContractStore: IContracts;

const unsubsContracts = contracts.subscribe((v) => {
  contractsStore = v;
});

const unsubscribeContractStart = startedContracts.subscribe((v) => {
  startedContractStore = v;
});

export function handleContracts(data: IContracts[]) {
  contracts.set(data);
}

export const queue = writable(false);

export const started = writable(false);

export const saledcontracts = writable<ISaledContract[]>([]);
