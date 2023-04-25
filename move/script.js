class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {

      
        this.load.path = 'assets/animations/';

        this.load.image('zumbi1', 'zombi.png');
        this.load.image('zumbi2', 'zombi_Atack.png');
        this.load.image('zumbi3', 'zombi.png');
        this.load.image('zumbi4', 'zombi_Atack.png');
    }

    create ()
    {
        this.anims.create({
            key: 'snooze',
            frames: [
                { key: 'zumbi1' },
                { key: 'zumbi2' },
                { key: 'zumbi3' },
                { key: 'zumbi4', duration: 20 }
            ],
            frameRate: 8,
            repeat: -1
        });

        this.add.sprite(400, 300, 'zumbi1')
            .play('snooze');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 700,
    backgroundColor: '#fbf0e4',
    scene: Example
};

const game = new Phaser.Game(config);