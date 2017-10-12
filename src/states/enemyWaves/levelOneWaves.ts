import EnemyFactory from '../../components/Enemy/EnemyFactory'
import Enemy from '../../components/Enemy/Enemy'

/**
 * Get array of enemies for a wave number. If no wave defined, returns empty array
 * @param {number} waveNumber
 * @returns {Enemy[]}
 */
const getLevelOneEnemyWave = (waveNumber: number, enemyFactory: EnemyFactory): Enemy[] => {
  let enemies

  switch (waveNumber) {
    case 1:
      enemies = [
        enemyFactory.makeTutorial(),
      ]
      break
    case 2:
      enemies = [
        enemyFactory.makeDumb(),
        enemyFactory.makeDumb(),
        enemyFactory.makeDumbMovingTracking()
      ]
      break
    case 3:
      enemies = [
        enemyFactory.makeSlowCenteredScatterer()
      ]
      break
    case 4:
      enemies = [
        enemyFactory.makeDumb(),
        enemyFactory.makeDumb(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking()
      ]
      break
    case 5:
      enemies = [
        enemyFactory.makeSlowCenteredStrongScatterer(),
      ]
      break
    case 6:
      enemies = [
        //enemyFactory.makeDumbMovingFastShooting(),
        //enemyFactory.makeDumbMovingFastShooting(),
        //enemyFactory.makeDumbMovingFastShooting(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
      ]
      break
    case 7:
      enemies = [
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingFastShooting(),
        enemyFactory.makeDumbMovingFastShooting(),
        enemyFactory.makeDumbMovingFastShooting()
      ]
      break
    case 8:
      enemies = [
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingScatterer()
      ]
      break
    case 9:
      enemies = [
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeSlowMovingSpraying(true),
        enemyFactory.makeSlowMovingSpraying(false)
      ]
      break
    case 10:
      enemies = [
        enemyFactory.makeSlowCenteredCrazyScatterer()
      ]
      break
    case 11:
      enemies = [
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingTracking(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeSlowMovingSpraying(true),
        enemyFactory.makeSlowMovingSpraying(false),
        enemyFactory.makeSlowMovingSpraying(true),
        enemyFactory.makeSlowMovingSpraying(false),
      ]
      break
    case 12:
      enemies = [
        enemyFactory.makeSlowMovingSpraying(true),
        enemyFactory.makeSlowMovingSpraying(false),
        enemyFactory.makeSlowMovingSpraying(true),
        enemyFactory.makeSlowMovingSpraying(false),
        enemyFactory.makeSlowMovingSpraying(true),
        enemyFactory.makeSlowMovingSpraying(false),
        enemyFactory.makeSlowMovingSpraying(true),
        enemyFactory.makeSlowMovingSpraying(false),
        enemyFactory.makeSlowMovingSpraying(true),
        enemyFactory.makeSlowMovingSpraying(false),
      ]
      break
    case 13:
      enemies = [
        enemyFactory.makeSlowCenteredStrongScatterer(true),
        enemyFactory.makeSlowCenteredStrongScatterer(false)
      ]
      break
    case 14:
      enemies = [
        enemyFactory.makeDumbMovingCrazyScatterer()
      ]
      break
    case 15:
      enemies = [
        enemyFactory.makeSlowCenteredStrongScatterer(true),
        enemyFactory.makeSlowCenteredStrongScatterer(false),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
      ]
      break
    case 16:
      enemies = [
        enemyFactory.makeDumbMovingCrazyScatterer()
      ]
      break
    case 17:
      enemies = [
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer(),
        enemyFactory.makeDumbMovingScatterer()
      ]
      break
    default:
      enemies = []
      break
  }

  return enemies
}

export default getLevelOneEnemyWave
