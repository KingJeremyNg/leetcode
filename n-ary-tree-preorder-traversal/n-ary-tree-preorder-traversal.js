/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];
    function traverse(tree) {
        if (!tree) return res;
        res.push(tree.val);
        tree.children.forEach((object) => traverse(object));
        return res;
    }
    return traverse(root);
};