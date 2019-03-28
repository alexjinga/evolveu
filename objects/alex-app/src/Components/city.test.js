import City from "./City.js";

test("testing City class & methods: ", () => {
	const obj = new City("Managuador", 245, 135, 2000000);
	expect(obj.name).toBe("Managuador");
	expect(obj.latitude).toBe(245);
	expect(obj.longitude).toBe(135);
	expect(obj.population).toBe(2000000);
	expect(obj.show()).toBe(
		'{"name":"Managuador","latitude":245,"longitude":135,"population":2000000}'
	);
	obj.movedIn(500000);
	expect(obj.population).toBe(2500000);
	obj.movedOut(1000000);
	expect(obj.population).toBe(1500000);
	obj.movedOut(1499980);
	expect(obj.howBig(obj.population)).toBe("Hamlet");
	obj.movedIn(200);
	expect(obj.howBig(obj.population)).toBe("Village");
	obj.movedIn(2000);
	expect(obj.howBig(obj.population)).toBe("Town");
	obj.movedIn(20000);
	expect(obj.howBig(obj.population)).toBe("Large Town");
	obj.movedIn(200000);
	expect(obj.howBig(obj.population)).toBe("City");
});
