function preload() {
    this.load.image('player', 'assets/repl.png');

    this.load.path = 'assets/animations/';

    this.load.image('zumbi1', 'zombi.png');
    this.load.image('zumbi2', 'zombi_Atack.png');
    this.load.image('zumbi3', 'zombi.png');
    this.load.image('zumbi4', 'zombi_Atack.png');
}

function create() {
    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    this.player = this.physics.add.image(config.width / 2, config.height / 2, 'player').setScale(0.25, 0.25);
    this.player.setCollideWorldBounds(true);


    this.anims.create({
            key: 'zumbi',
            frames: [
                { key: 'zumbi1' },
                { key: 'zumbi2' },
                { key: 'zumbi3' },
                { key: 'zumbi4', duration: 20 }
            ],
            frameRate: 8,
            repeat: -1
        });

        this.zumbi = this.physics.add.sprite(config.width / 2, config.height / 2, 'zumbi1')
          .play('zumbi')
          .setScale(0.25, 0.25);
  this.zumbi.setCollideWorldBounds(true);

  this.zumbi.body.setSize(250, 500);
  this.zumbi.body.setOffset(70, 0);


  
  this.physics.add.collider(this.player, this.zumbi, function() {
        console.log('colisão entre o player e o zumbi');
    });

  
}




function update() {
  
  
  let cursors = this.input.keyboard.createCursorKeys();
    if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    else this.player.setVelocityX(0);
  
    if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    else this.player.setVelocityY(100);
this.zumbi.setVelocityX(-100);

    
 

    
  
  
}





const config = {
    type: Phaser.AUTO,
    width: 1700,
    height: 400,
    backgroundColor: '#0CE5F5',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);