float parallax(float offset, float scrollHeight, float activator) {
  float pKoef = 0.5;
  float parallax =  offset / scrollHeight * pKoef * activator;

  return parallax;
}