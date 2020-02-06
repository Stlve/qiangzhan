function Bullet(direction) {
    THREE.Mesh.call(this,
        new THREE.SphereGeometry(Bullet.RADIUS, 8, 6),
        new THREE.MeshBasicMaterial({color: 0x333333})
    );

    this.direction = direction;
    this.speed = 2000;//子弹速度定义
    this.damage = 20;//子弹伤害定义
}

Bullet.prototype = Object.create(THREE.Mesh.prototype);
Bullet.prototype.constructor = Bullet;
Bullet.RADIUS = 3;//子弹的直径定义

Bullet.prototype.update = (function () {
    var scaledDirection = new THREE.Vector3();
    return function (delta) {
        scaledDirection.copy(this.direction).multiplyScalar(this.speed * delta);
        this.position.add(scaledDirection);
    };
})();

Bullet.prototype.clone = function (object) {
    if (typeof object === 'undefined') {
        object = new Bullet();
    }
    THREE.Mesh.prototype.clone.call(this, object);

    object.direction = this.direction;
    object.speed = this.speed;
    object.damage = this.damage;

    return object;
};
