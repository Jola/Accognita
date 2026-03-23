import type { PlayerState, WorldState } from "../types/GameState";
import { CORE_BASE_XP, CORE_XP_MULTIPLIER, CORE_MAX_LEVEL } from "../types/GameState";
import type { EntityInstance } from "../types/Entity";
import type { MaterialStack } from "../types/Material";
import type { SkillDiscoveryResult, DiscoveryMethod } from "../types/Skill";
export { calcSuccessChance } from "../data/balance";
export interface InteractionResult {
    success: boolean;
    method: DiscoveryMethod;
    entityName: string;
    skillResults: SkillDiscoveryResult[];
    materialResults: MaterialStack[];
    aggroTriggered: boolean;
    message: string;
}
export declare function absorbEntity(player: PlayerState, world: WorldState, instanceId: string): InteractionResult;
export declare function analyzeEntity(player: PlayerState, world: WorldState, instanceId: string): InteractionResult;
export declare function processRespawns(world: WorldState): string[];
export declare function findNearestEntity(player: PlayerState, world: WorldState, maxRadius?: number): EntityInstance | null;
export { CORE_BASE_XP, CORE_XP_MULTIPLIER, CORE_MAX_LEVEL };
//# sourceMappingURL=EntitySystem.d.ts.map