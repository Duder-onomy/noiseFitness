define([
        'chai',
        'mocha',
        'sinon',
        'sinonChai',
        'noiseFitness/view',
        'sinonSpy'
    ],
    function (chai, mocha, sinon, sinonChai, NoiseFitnessView) {

        'use strict';

        var should = chai.should();

        chai.use(sinonChai);
        mocha.setup('bdd');

        describe('noiseFitnessView', function() {
            it('should exist', function() {
                should.exist(new NoiseFitnessView());
            });
        });
    });