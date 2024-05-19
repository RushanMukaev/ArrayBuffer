import { ArrayBufferConverter, getBuffer } from '../js/app';

test('Проверка перевода обратно в строку', () => {
	const buffer = getBuffer();
	const convert = new ArrayBufferConverter();
	convert.load(buffer);

	const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

	expect(convert.toString()).toEqual(result);
});