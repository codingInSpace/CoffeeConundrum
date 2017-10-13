import 'phaser'
import IAttackStrategy from './IAttackStrategy'

export default class ScatterCrazyAttackStrategy implements IAttackStrategy {
  setupProperties(): void {}

  setupWeapon(game: Phaser.Game, weapon: Phaser.Weapon, resource: string): Phaser.Weapon {
    weapon.bulletSpeed = 300
    weapon.multiFire = true
    weapon.fireRate = 350

    return weapon
  }

  shoot = (weapon: Phaser.Weapon): void => {
    for (let i = 240; i >= 120; i -= 10) {
      weapon.fireAngle = i
      weapon.fire()
    }
  }

  attack(weaponWeak: Phaser.Weapon, weaponStrong: Phaser.Weapon, timer: Phaser.Timer): void {
    this.shoot(weaponStrong)
  }
}
