const week = 7*24*60*60*1000; 
const id = 1; 

const order_histories = [
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "alcohol"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "agave"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "alfredo sauce"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "apple schnapps"},
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "cabbage"},  
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "beets"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "grapefruit"},
	{servings: 4, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "almond"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "anchovies"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "barbecue sauce"}, 
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "bean curd"},
	{servings: 8, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "beef"}, 
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "chicken"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "lentil"}, 
	{servings: 3, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "strawberry"}, 
	{servings: 2, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "cashew"}, 
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "fiji apple"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "salt pork"}, 
	{servings: 8, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "red pepper"}, 
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "bell pepper"}, 
	{servings: 8, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "shrimp"},
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "white rice"}, 
	{servings: 8, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "wheat bread"}, 
	{servings: 4, price: 3.35, week: new Date(Date.now()).getTime() - week, createdAt: Date.now() - week, userId: id, ingredientName: "spaghetti"}, 
	{servings: 3, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - week, userId: id, ingredientName: "peppers"},
	{servings: 8, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "beef roast"},
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "cabbage"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "grapefruit"},
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "white rice"}, 
	{servings: 3, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "bell pepper"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "bordelaise sauce"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "bran flakes"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "cane sugar"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "beets"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "strawberry"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "canned corn"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "cashew milk"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "chana dal"}, 
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "white rice"}, 
	{servings: 4, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "chicken breast"},
	{servings: 2, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "chicken broth"},
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "cabbage"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "chicken fillets"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "grapefruit"},
	{servings: 6, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "nonfat milk"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "chicken egg"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 2*week, createdAt: Date.now() - 2*week, userId: id, ingredientName: "bell pepper"}, 
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "fiji apple"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "chicken pieces"},
	{servings: 7, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "chili powder"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "chipped beef"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "ciabatta"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "beets"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 3*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "cider vinegar"},
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "white rice"}, 
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "cinnamon toast crunch cereal"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "clementine"},
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "cabbage"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "coconut"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "grapefruit"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "corn bread"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "beets"},

	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 3*week, userId: id, ingredientName: "sourdough"},
	{servings: 8, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "sticky rice"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "clementine"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "nonfat milk"},
	{servings: 4, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "corn bread"},

	{servings: 4, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "corn tortillas"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "cottage cheese"},
	{servings: 9, price: 3.35, week: new Date(Date.now()).getTime() - 4*week, createdAt: Date.now() - 4*week, userId: id, ingredientName: "crabmeat"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "nonfat yogurt"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "crayfish"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "cream of celery soup"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "crescent"},
	{servings: 8, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "cherry"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "crostini"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "beets"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "sourdough"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "ciabatta"},
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "bran flakes"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "grapefruit"},
	{servings: 7, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "sharp cheddar cheese"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 5*week, createdAt: Date.now() - 5*week, userId: id, ingredientName: "cucumber salad"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "date sugar"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "deli meat"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "sourdough"},
	{servings: 15, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "white rice"},
	{servings: 1, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "dessert wine"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "cherry"},
	{servings: 5, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "grapefruit"},
	{servings: 10, price: 3.35, week: new Date(Date.now()).getTime() - 6*week, createdAt: Date.now() - 6*week, userId: id, ingredientName: "ciabatta"},
]

module.exports = order_histories; 