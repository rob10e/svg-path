// tslint:disable:no-expression-statement
import test from 'ava';
import Builder from './builder';

test('builder is not null', t => {
  const builder = new Builder();
  t.not(builder, null);
});

test('moveTo(10, 10) generates "M 10 10"', t => {
  const builder = new Builder();
  const path = builder.moveTo(10, 10).close();
  t.is(path, 'M 10 10 z');
});

test('moveToRel(10, 10) generates "m 10 10"', t => {
  const builder = new Builder();
  const path = builder.moveToRel(10, 10).close();
  t.is(path, 'm 10 10 z');
});

test('moveTo(10, 10).moveToRel(10, 10) generates "M 10 10 m 10 10"', t => {
  const builder = new Builder();
  const path = builder.moveTo(10, 10).moveToRel(10, 10).close();
  t.is(path, 'M 10 10 m 10 10 z');
});

test('lineTo(10, 10) generates "L 10 10"', t => {
  const builder = new Builder();
  const path = builder.lineTo(10, 10).close();
  t.is(path, 'L 10 10 z');
});

test('lineToRel(10, 10) generates "l 10 10"', t => {
  const builder = new Builder();
  const path = builder.lineToRel(10, 10).close();
  t.is(path, 'l 10 10 z');
});

test('horizontalTo(90) generates "H 90"', t => {
  const builder = new Builder();
  const path = builder.horizontalTo(90).close();
  t.is(path, 'H 90 z');
});

test('horizontalToRel(10) generates "h 10"', t => {
  const builder = new Builder();
  const path = builder.horizontalToRel(10).close();
  t.is(path, 'h 10 z');
});

test('verticalTo(90) generates "V 90"', t => {
  const builder = new Builder();
  const path = builder.verticalTo(90).close();
  t.is(path, 'V 90 z');
});

test('verticalToRel(10, 10) generates "v 10"', t => {
  const builder = new Builder();
  const path = builder.verticalToRel(10).close();
  t.is(path, 'v 10 z');
});

test('cubicTo(20, 20, 40, 20, 50, 10) generates "C 20 20, 40 20, 50 10"', t => {
  const builder = new Builder();
  const path = builder.cubicTo(20, 20, 40, 20, 50, 10).close();
  t.is(path, 'C 20 20, 40 20, 50 10 z');
});

test('cubicToRel(70, 20, 120, 20, 120, 10) generates "c 70 20, 120 20, 120 10"', t => {
  const builder = new Builder();
  const path = builder.cubicToRel(70, 20, 120, 20, 120, 10).close();
  t.is(path, 'c 70 20, 120 20, 120 10 z');
});

test('smoothTo(150, 150, 180, 80) generates "S 150 150, 180 80"', t => {
  const builder = new Builder();
  const path = builder.smoothTo(150, 150, 180, 80).close();
  t.is(path, 'S 150 150, 180 80 z');
});

test('smoothToRel(10, 10, 10, 10) generates "s 150 150, 180 80"', t => {
  const builder = new Builder();
  const path = builder.smoothToRel(150, 150, 180, 80).close();
  t.is(path, 's 150 150, 180 80 z');
});

test('quadTo(95, 10, 180, 80) generates "Q 95 10 180 80"', t => {
  const builder = new Builder();
  const path = builder.quadTo(95, 10, 180, 80).close();
  t.is(path, 'Q 95 10 180 80 z');
});

test('quadToRel(95, 10, 180, 80) generates "q 95 10 180 80"', t => {
  const builder = new Builder();
  const path = builder.quadToRel(95, 10, 180, 80).close();
  t.is(path, 'q 95 10 180 80 z');
});

test('quadStringTo(180, 80) generates "T 180 80"', t => {
  const builder = new Builder();
  const path = builder.quadStringTo(180, 80).close();
  t.is(path, 'T 180 80 z');
});

test('quadStringToRel(180, 80) generates "t 180 80"', t => {
  const builder = new Builder();
  const path = builder.quadStringToRel(180, 80).close();
  t.is(path, 't 180 80 z');
});

test('arcTo(30, 50, 0, false, true, 165.55, 162.45) generates "A 30 50 0 0 1 162.55 162.45"', t => {
  const builder = new Builder();
  const path = builder.arcTo(30, 50, 0, false, true, 165.55, 162.45).close();
  t.is(path, 'A 30 50 0 0 1 165.55 162.45 z');
});

test('arcToRel(30, 50, 0, false, true, 165.55, 162.45) generates "a 30 50 0 0 1 162.55 162.45"', t => {
  const builder = new Builder();
  const path = builder.arcToRel(30, 50, 0, false, true, 165.55, 162.45).close();
  t.is(path, 'a 30 50 0 0 1 165.55 162.45 z');
});