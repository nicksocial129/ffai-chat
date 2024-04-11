"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultMountingTarget = createDefaultMountingTarget;
function createDefaultMountingTarget(mountingTarget) {
  const mountingTargetNode = document.querySelector(mountingTarget);
  if (!mountingTargetNode) {
    const generatedMountingTargetNode = document.createElement("div");
    if (mountingTarget.startsWith("#")) {
      generatedMountingTargetNode.id = mountingTarget.replace("#", "");
    }
    if (mountingTarget.startsWith(".")) {
      generatedMountingTargetNode.classList.add(mountingTarget.replace(".", ""));
    }
    document.body.appendChild(generatedMountingTargetNode);
  }
}