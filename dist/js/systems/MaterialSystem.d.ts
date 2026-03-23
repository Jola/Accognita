import type { PlayerState } from "../types/GameState";
import type { MaterialStack } from "../types/Material";
export declare function formatAmount(n: number): string;
/** Gibt die aktuelle Menge eines Materials zurück */
export declare function getMaterialAmount(player: PlayerState, materialId: string): number;
/** Fügt eine Menge eines Materials zum Inventar hinzu */
export declare function addMaterial(player: PlayerState, materialId: string, amount: number): void;
/** Prüft ob der Spieler alle Kosten bezahlen kann */
export declare function canAfford(player: PlayerState, cost: MaterialStack[]): boolean;
/** Zieht Materialkosten ab — nur aufrufen nach canAfford-Check! */
export declare function deductMaterials(player: PlayerState, cost: MaterialStack[]): void;
/** Alle Materialien als Array zurückgeben (zum Anzeigen) */
export declare function getMaterialList(player: PlayerState): {
    id: string;
    name: string;
    icon: string;
    amount: number;
    formatted: string;
}[];
export interface GrowResult {
    success: boolean;
    hpGained: number;
    missingMaterials?: MaterialStack[];
    message: string;
}
export declare function useGrow(player: PlayerState): GrowResult;
//# sourceMappingURL=MaterialSystem.d.ts.map