import turtle
import random
import time

# Set up the screen
screen = turtle.Screen()
screen.bgcolor("black")  # Set background color to black
screen.title("Heart with Fireworks")

# Create a turtle for drawing the heart
heart = turtle.Turtle()
heart.shape("turtle")
heart.color("red")
heart.speed(10)
heart.width(3)

# Function to draw a heart shape
def draw_heart():
    heart.begin_fill()
    heart.left(50)
    heart.forward(133)
    heart.circle(50, 200)
    heart.right(140)
    heart.circle(50, 200)
    heart.forward(133)
    heart.end_fill()

# Function to write the message inside the heart
def write_message():
    message_writer = turtle.Turtle()
    message_writer.hideturtle()
    message_writer.color("white")
    message_writer.penup()
    message_writer.goto(-100, -40)  # Position the text inside the heart
    message_writer.write("Hello World", font=("Arial", 16, "bold"))
    message_writer.goto(-120, -70)
    message_writer.write("Hopefully you be my wife", font=("Arial", 16, "bold"))

# Create a turtle for fireworks
fireworks = turtle.Turtle()
fireworks.hideturtle()
fireworks.speed(0)

# Function to draw fireworks
def draw_fireworks():
    fireworks.penup()
    fireworks.goto(random.randint(-300, 300), random.randint(100, 300))  # Random start position
    fireworks.pendown()
    fireworks.color(random.choice(["red", "yellow", "green", "blue", "purple", "orange"]))
    
    # Draw a firework explosion (lines in all directions)
    for _ in range(10):
        angle = random.randint(0, 360)
        fireworks.setheading(angle)
        fireworks.forward(random.randint(50, 100))
        fireworks.backward(random.randint(50, 100))

# Function to show fireworks without blocking the program
def show_fireworks():
    draw_fireworks()
    screen.ontimer(show_fireworks, 500)  # Schedule the next firework after 500ms

# Function to animate the heart, message, and fireworks
def animate_heart_and_fireworks():
    draw_heart()
    write_message()
    show_fireworks()  # Start the fireworks animation

# Start the animation
animate_heart_and_fireworks()

# Close the window on click
screen.exitonclick()
