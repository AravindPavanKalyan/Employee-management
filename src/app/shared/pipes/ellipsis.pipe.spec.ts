import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform random text to "random text"- when no params mentioned', () => {
    const pipe = new EllipsisPipe();
    const transformedText = pipe.transform('random text');
    expect(transformedText).toBe('random text');
  });

  it('transform random text to "random tex..." - when 10 is passed as params mentioned', () => {
    const pipe = new EllipsisPipe();
    const transformedText = pipe.transform('random text', 10);
    expect(transformedText).toBe('random tex...');
  });

  it('transform -- if undefined is passed as params mentioned', () => {
    const pipe = new EllipsisPipe();
    let value = '';
    const transformedText = pipe.transform(value);
    console.log('transformedText', transformedText);
    expect(transformedText).toBe('Inalid or empty value');
  });
});
