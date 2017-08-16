import * as Assets from '../../assets'
import Player from '../../components/Player'
import Enemy from '../../components/Enemy/Enemy'
import DumbEnemyStrategy from '../../components/Enemy/DumbEnemyStrategy'
import DumbTrackingEnemyStrategy from '../../components/Enemy/DumbTrackingEnemyStrategy'
import DumbSprayingEnemyStrategy from '../../components/Enemy/DumbSprayingEnemyStrategy'
import GameAdapter from '../../globals/GameAdapter'
import GameManager from '../../globals/GameManager'

export default class LevelOne extends Phaser.State {
  private backgroundTemplateSprite: Phaser.Sprite = null
  private player: Player
  private enemiesGroup: Phaser.Group
  private gameAdapter: GameAdapter

  private waves = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
  }

  private currentWaveNumber: number

  constructor() {
    super()
    this.gameAdapter = new GameAdapter()
  }

  public preload(): void {
    this.backgroundTemplateSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Assets.Images.ImagesLakeside.getName())
    this.backgroundTemplateSprite.anchor.setTo(0.5)
  }

  public create(): void {

    // Spawn player
    this.player = new Player(this.game)
    GameManager.Instance.setPlayerInstance(this.player)

    this.waves[1] = [
      new Enemy(this.game, new DumbEnemyStrategy()),
      new Enemy(this.game, new DumbEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy())
    ]
    this.waves[2] = [
      new Enemy(this.game, new DumbSprayingEnemyStrategy())
    ]
    this.waves[3] = [
      new Enemy(this.game, new DumbEnemyStrategy()),
      new Enemy(this.game, new DumbEnemyStrategy()),
      new Enemy(this.game, new DumbEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
    ]
    this.waves[4] = [
      new Enemy(this.game, new DumbSprayingEnemyStrategy(true)),
      new Enemy(this.game, new DumbSprayingEnemyStrategy(false))
    ]
    this.waves[5] = [
      new Enemy(this.game, new DumbEnemyStrategy()),
      new Enemy(this.game, new DumbEnemyStrategy()),
      new Enemy(this.game, new DumbEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
    ]
    this.waves[6] = [
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
    ]
    this.waves[6] = [
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbSprayingEnemyStrategy(true)),
      new Enemy(this.game, new DumbSprayingEnemyStrategy(false))
    ]
    this.waves[6] = [
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbTrackingEnemyStrategy()),
      new Enemy(this.game, new DumbSprayingEnemyStrategy(true)),
      new Enemy(this.game, new DumbSprayingEnemyStrategy(false)),
      new Enemy(this.game, new DumbSprayingEnemyStrategy(true)),
      new Enemy(this.game, new DumbSprayingEnemyStrategy(false)),
      new Enemy(this.game, new DumbSprayingEnemyStrategy(true)),
      new Enemy(this.game, new DumbSprayingEnemyStrategy(false))
    ]

    this.enemiesGroup = this.game.add.group()

    // Spawn first wave
    this.enemiesGroup.addMultiple(this.waves['1'])
    this.currentWaveNumber = 1
  }

  public update(): void {
    GameManager.Instance.clearGraveyard()
    this.updateWaveIfPassed()
    this.gameAdapter.checkCollisions(this.game, this.player, this.enemiesGroup)
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

      if (this.waves[this.currentWaveNumber] !== undefined) {
        this.enemiesGroup.addMultiple(this.waves[this.currentWaveNumber])
      } else {
        this.goNext()
      }
    }
  }
}
