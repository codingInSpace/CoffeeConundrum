import * as Assets from '../../assets'
import Player from '../../components/Player'
import GameAdapter from '../../globals/GameAdapter'
import GameManager from '../../globals/GameManager'
import getLevelOneEnemyWave from '../enemyWaves/levelOneWaves'
import EnemyFactory from '../../components/Enemy/EnemyFactory'

export default class LevelOne extends Phaser.State {
  private player: Player
  private enemiesGroup: Phaser.Group
  private gameAdapter: GameAdapter
  private bgBack: any
  private bgMid: any
  private bgFront: any
  private farTilesSpeed: number = 0.1
  private midTilesSpeed: number = 1
  private frontTilesSpeed: number = 3
  private enemyFactory: EnemyFactory

  private currentWaveNumber: number

  constructor() {
    super()
    this.gameAdapter = new GameAdapter()
  }

  public create(): void {
    this.enemyFactory = new EnemyFactory(this.game)
    this.game.stage.backgroundColor = '#071924'

    const backImg = Assets.Images.ImagesCyberpunkFarEdit3.getName()
    const midImg = Assets.Images.ImagesCyberpunkMid.getName()
    const frontImg = Assets.Images.ImagesCyberpunkForeground.getName()

    this.bgBack = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage(backImg).height,
      this.game.width,
      this.game.cache.getImage(backImg).height,
      backImg
    )

    this.bgMid = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage(midImg).height,
      this.game.width,
      this.game.cache.getImage(midImg).height,
      midImg
    )

    this.bgFront = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage(frontImg).height,
      this.game.width,
      this.game.cache.getImage(frontImg).height,
      frontImg
    )

    this.gameAdapter.initHealthBar(this.game)

    // Spawn player
    this.player = new Player(this.game)
    GameManager.Instance.setPlayerInstance(this.player)

    this.enemiesGroup = this.game.add.group()

    // Spawn first wave
    this.enemiesGroup.addMultiple(getLevelOneEnemyWave(1, this.enemyFactory))
    this.currentWaveNumber = 1
  }

  public update(): void {
    GameManager.Instance.clearGraveyard()
    this.updateWaveIfPassed()
    this.gameAdapter.checkCollisions(this.game, this.player, this.enemiesGroup)

    //let bullets = 0
    //this.enemiesGroup.forEach((enemy) => {
    //  bullets += enemy.getWeakBullets().length + enemy.getStrongBullets().length
    //  console.log(enemy.getWeakBullets())
    //}, this)
    //console.log(bullets)

    //if (!this.player.dodgeReady) {
    //  console.log(this.player.getDodgeCooldownTimePercent())
    //}

    GameManager.Instance.updateFiltersTime(this.game.time.totalElapsedSeconds() * 1000)
    this.bgBack.tilePosition.x -= this.farTilesSpeed
    this.bgMid.tilePosition.x -= this.midTilesSpeed
    this.bgFront.tilePosition.x -= this.frontTilesSpeed
  }

  public goNext(): void {
    this.game.state.start('title')
  }

  /**
   * Check if current enemies wave is all dead
   * and if so, add the next until none are left
   */
  private updateWaveIfPassed(): void {
    if (this.gameAdapter.enemyGroupDead(this.enemiesGroup)) {
      this.currentWaveNumber = this.currentWaveNumber + 1

      // Make parallax bg move slightly faster for each wave
      this.farTilesSpeed += 0.03
      this.midTilesSpeed += 0.1
      this.frontTilesSpeed += 0.3

      const wave = getLevelOneEnemyWave(this.currentWaveNumber, this.enemyFactory)

      if (wave.length > 0) {
        this.enemiesGroup.addMultiple(wave)
      } else {
        this.goNext()
      }
    }
  }

}
