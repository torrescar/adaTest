/*hi this is a change i made 
but i dunno if it'll work, please pull this request*/

noStroke();

// creating the Class for Building 
var Building = function(r, g, b, x, y, w, h, s) { 
    this.r = r;
    this.g = g;
    this.b = b;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.s = s;
    
    this.buildingAppear = function() {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.w, this.h);
    };
    
    this.buildingMove = function(s) {
        if (this.x < width) {
            this.x += s;
        }
        else {
            this.x = -100;
        }
    };
};

// crating class for Layer
var Layer = function(r, g, b, bh, ry, rh, s) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.bh = bh;
    this.ry = ry;
    this.rh = rh;
    this.s = s;
    
    var randNumBldgs = random(1, 50);
    var bldgsList = [];
    
    for (var i = 0; i < randNumBldgs; i++) {
        var newBldg = new Building(this.r, this.g, this.b, random(0, width), height-random(1, this.bh), random(10, 60), 500, this.s); // use 10-10 to make the buildings more skinny; 500 to extend the height into the "ground"
        
        bldgsList.push(newBldg);
    }
    
    this.layerAppear = function(ry) {
        fill(this.r, this.g, this.b);
        rect(0, ry, width, 500);
        for (var i = 0; i < randNumBldgs; i++) {
            bldgsList[i].buildingAppear();
        }
    };
    
    this.layerMove = function(s) {
        for (var i = 0; i < randNumBldgs; i++) {
            bldgsList[i].buildingMove(this.s);
        }
    };
};

// creating the Layer objects; 
var layer1 = new Layer (255, 79, 138, 150, 100, height-random(50, 100), 2.5);
var layer1Ground = height-random(50, 100);

var layer2 = new Layer (194, 46, 98, 300, 100, height-random(50, 100), 1.5);
var layer2Ground = height-random(100, 150);

var layer3 = new Layer (100, 30, 70, 400, 100, height-random(50, 100), 1);
var layer3Ground = height-random(150, 200);

var draw = function() {
    background(0, 0, 0);
     layer3.layerAppear(layer3Ground);
     layer3.layerMove();
    
     layer2.layerAppear(layer2Ground);
     layer2.layerMove();
    
     layer1.layerAppear(layer1Ground);
     layer1.layerMove();
};