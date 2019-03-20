function assertEquals (a,b){
	if (a !== b) {
		console.log ('*** the two values are not the same:')
		console.log ('    p1 --> ', a)
		console.log ('    p2 --> ', b)
	}
	return 0
}

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");
