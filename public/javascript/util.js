const Util = {
  randomVec(speed) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], speed);
  },

  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },

  distance(pos1, pos2) {
    var x = Math.pow((pos1[0] - pos2[0]), 2);
    var y = Math.pow((pos1[1] - pos2[1]), 2);
    return Math.sqrt(x + y);
  },

  directionVec(pos1, pos2) {
    var x = (pos2[0] - pos1[0])/this.distance(pos1, pos2);
    var y = (pos2[1] - pos1[1])/this.distance(pos1, pos2);
    return [x, y];
  },

  bounce(pos, vel) {
    if (pos[0] < 0 || pos[0] > 500){
      return [-vel[0], vel[1]];
    } else if (pos[1] < 0 || pos[1] > 500) {
      return [vel[0], -vel[1]];
    }
  },

  randomPosition() {
    return [
      Math.random() * 500,
      Math.random() * 500
    ];
  }
};


module.exports = Util;
