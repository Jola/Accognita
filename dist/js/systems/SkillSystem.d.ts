import type { SkillInstance, SkillDiscoveryResult, CombineResult, DiscoveryMethod } from "../types/Skill";
import type { PlayerState } from "../types/GameState";
export declare function calcXpThreshold(baseThreshold: number, multiplier: number, level: number): number;
export declare function gainCoreAbilityXp(player: PlayerState, method: DiscoveryMethod, entityLevel?: number): {
    leveledUp: boolean;
    newLevel?: number;
    xpGained: number;
};
export declare function discoverSkill(player: PlayerState, skillId: string, method: DiscoveryMethod, entityLevel?: number): SkillDiscoveryResult;
export declare function combineSkills(player: PlayerState, skillIdA: string, skillIdB: string): CombineResult;
export declare function getPassiveSkills(player: PlayerState): SkillInstance[];
export declare function getDiscoveredSkillsSorted(player: PlayerState): SkillInstance[];
export declare function getXpProgress(instance: SkillInstance): number;
export declare function isMaxLevel(instance: SkillInstance): boolean;
export declare function getSkillEffectiveness(level: number): number;
export declare function gainSkillXp(player: PlayerState, skillId: string, amount: number): {
    leveledUp: boolean;
    newLevel?: number;
};
//# sourceMappingURL=SkillSystem.d.ts.map