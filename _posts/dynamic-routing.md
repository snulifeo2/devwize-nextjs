---
title: "Test Page Under Construction"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
#coverImage: "/assets/blog/default/default_og_image.png"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Axiology
  picture: "/assets/blog/authors/axiology.png"
#ogImage:
#  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.


```plain text
function helloWorld() {
  console.log("Hello, world!");
}
```

```python
def hello_world():
    print("Hello, world!")
```



```kotlin
@Composable  
@Preview  
fun App() {  
  
    MaterialTheme {  
  
    }}  
  
fun main() = application {  
    Window(onCloseRequest = ::exitApplication) {  
        App()  
    }  
}  
  
fun threeDimensionExample() {  
    if (!glfwInit()) {  
        throw IllegalStateException("Unable to initialize GLFW")  
    }  
  
    val window = glfwCreateWindow(800, 600, "Simple 3D Shape with OpenGL", NULL, NULL)  
    if (window == NULL) {  
        throw RuntimeException("Failed to create the GLFW window")  
    }  
  
    glfwMakeContextCurrent(window)  
    glfwShowWindow(window)  
  
    GL.createCapabilities()  
  
    // 색상 지정 (RGB: Red)    glClearColor(1.0f, 0.0f, 0.0f, 0.0f)  
  
    // 렌더링 루프  
    while (!glfwWindowShouldClose(window)) {  
        glClear(GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT) // 화면 클리어  
  
        // 삼각형 그리기  
        glBegin(GL_TRIANGLES)  
        glColor3f(0f, 1f, 0f) // 색상 지정 (RGB: Green)        glVertex3f(-0.6f, -0.4f, 0f)  
        glVertex3f(0.6f, -0.4f, 0f)  
        glVertex3f(0f, 0.6f, 0f)  
        glEnd()  
  
        glfwSwapBuffers(window)  
        glfwPollEvents()  
    }  
  
    glfwDestroyWindow(window)  
    glfwTerminate()  
}  
  
@Preview  
@Composable  
fun ProjectileMotionSimulator() {  
    var position by remember { mutableStateOf(Offset(0f, 500f)) }  
    val angle = 45 // 발사각도  
    val initialSpeed = 50f // 초기 속도  
    val gravity = 9.8f // 중력 가속도  
    val timeStep = 0.1f // 시간 간격  
  
    LaunchedEffect(Unit) {  
        var time = 0f  
        while (true) {  
            time += timeStep  
            val x = initialSpeed * cos(Math.toRadians(angle.toDouble())).toFloat() * time  
            val y = 500f - (initialSpeed * sin(Math.toRadians(angle.toDouble())).toFloat() * time - 0.5f * gravity * time * time)  
            position = Offset(x, y)  
            if (y > 500f) break // 땅에 닿으면 애니메이션 종료  
            delay(10L)  
        }  
    }  
  
    Canvas(modifier = Modifier.fillMaxSize()) {  
        drawCircle(  
            color = Color.Blue,  
            center = position,  
            radius = 10f  
        )  
    }  
}
```


