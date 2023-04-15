<?php
$jokes = array(
    array("question" => "Why don't oysters give to charity?", "answer" => "Because they're shellfish."),
    array("question" => "What do you call a fake noodle?", "answer" => "An impasta."),
    array("question" => "Why did the tomato turn red?", "answer" => "Because it saw the salad dressing."),
    array("question" => "What do you get when you cross a snowman and a shark?", "answer" => "Frostbite."),
    array("question" => "What do you call an alligator in a vest?", "answer" => "An investigator."),
    array("question" => "Why did the scarecrow win an award?", "answer" => "Because he was outstanding in his field."),
    array("question" => "What do you get when you cross a sheep and a kangaroo?", "answer" => "A woolly jumper."),
    array("question" => "Why did the cookie go to the doctor?", "answer" => "Because it felt crumbly."),
    array("question" => "What's brown and sticky?", "answer" => "A stick."),
    array("question" => "Why don't scientists trust atoms?", "answer" => "Because they make up everything."),
    array("question" => "What do you call a fish wearing a bowtie?", "answer" => "Sofishticated."),
    array("question" => "Why don't ants get sick?", "answer" => "Because they have tiny ant-bodies."),
    array("question" => "What do you call a can opener that doesn't work?", "answer" => "A can't opener."),
    array("question" => "Why did the belt go to jail?", "answer" => "For holding up pants."),
    array("question" => "Why did the banana go to the doctor?", "answer" => "Because it wasn't peeling well."),
    array("question" => "Why did the chicken go to the seance?", "answer" => "To talk to the other side."),
    array("question" => "What do you call a bear with no teeth?", "answer" => "A gummy bear."),
    array("question" => "What do you call a fly without wings?", "answer" => "A walk."),
    array("question" => "What do you get when you cross a snowman and a vampire?", "answer" => "Frostbite."),
    array("question" => "Why did the coffee file a police report?", "answer" => "It got mugged."),
    array("question" => "Why do bees hum?", "answer" => "Because they don't know the words."),
    array("question" => "What do you call a man with no arms and no legs in the water?", "answer" => "Bob."),
    array("question" => "Why do seagulls fly over the sea?", "answer" => "Because if they flew over the bay, they'd be bagels."),
    array("question" => "Why don't skeletons fight each other?", "answer" => "They don't have the guts."),
    array("question" => "Why was the math book sad?", "answer" => "Because it had too many problems."),
    array("question" => "Why did the golfer wear two pairs of pants?", "answer" => "In case he got a hole in one."),

);

function get_joke() {
    global $jokes;
    $rand_index = array_rand($jokes);
    return $jokes[$rand_index];
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/api/jokes') {
    $joke = get_joke();
    header('Content-Type: application/json');
    echo json_encode($joke);
}


