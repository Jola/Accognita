export interface MaterialDefinition {
    id: string;
    name: string;
    icon: string;
    description: string;
}
export interface MaterialDrop {
    materialId: string;
    amountMin: number;
    amountMax: number;
    chance: number;
}
export interface MaterialStack {
    materialId: string;
    amount: number;
}
//# sourceMappingURL=Material.d.ts.map