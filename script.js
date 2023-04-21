class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.path = 'assets/animations/';

        this.load.image('cat1', 'zombi.png');
        this.load.image('cat2', 'zombi_Atack.png');
        this.load.image('cat3', 'zombi.png');
        this.load.image('cat4', 'zombi_Atack.png');
    }

    create ()
    {
        this.anims.create({
            key: 'snooze',
            frames: [
                { key: 'cat1' },
                { key: 'cat2' },
                { key: 'cat3' },
                { key: 'cat4', duration: 20 }
            ],
            frameRate: 8,
            repeat: -1
        });

        this.add.sprite(400, 300, 'cat1')
            .play('snooze');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#fbf0e4',
    scene: Example
};

const game = new Phaser.Game(config);