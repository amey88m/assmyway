function getPhone() {
   <span class="code-keyword">return</span> <span class="code-string">"</span><span class="code-string">iPhone7"</span>;
}
 
function displayProductDetails(productName) {
   console.log(<span class="code-string">"</span><span class="code-string">This is "</span> + productName);
}
 
function addProductToCart(productName) {
   console.log(productName + <span class="code-string">"</span><span class="code-string"> added to your shopping cart"</span>);
}
 
function makePayment(productName) {
   console.log(<span class="code-string">"</span><span class="code-string">Making payment for "</span> + productName);
}
 
function getRelatedProducts() {
   <span class="code-keyword">var</span> relatedProducts = [<span class="code-string">"</span><span class="code-string">Headphone"</span>, <span class="code-string">"</span><span class="code-string">Phone cover"</span>, <span class="code-string">"</span><span class="code-string">Tempered glass"</span>];
   <span class="code-keyword">return</span> relatedProducts;
}
 
function suggestMeAHeadphone() {
   <span class="code-keyword">var</span> relatedProducts = getRelatedProducts();
   productName = relatedProducts[0];
   <span class="code-keyword">return</span> productName;
}
 
<span class="code-keyword">var</span> productName = getPhone();
displayProductDetails(productName);
addProductToCart(productName);
<span class="code-keyword">var</span> headPhone = suggestMeAHeadphone();
makePayment(productName);
 
<span class="code-comment">//</span><span class="code-comment"> Output:</span>
<span class="code-comment">//</span><span class="code-comment"> This is iPhone7</span>
<span class="code-comment">//</span><span class="code-comment"> iPhone7 added to your shopping cart</span>
<span class="code-comment">//</span><span class="code-comment"> Making payment for Headphone</span>