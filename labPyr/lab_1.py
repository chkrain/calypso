# Задание 1, 2, 3
answers = [
    {'Q': 'My name ___ Vova.', 'A': 'is'},
    {'Q': 'I ___ a coder.', 'A': 'am'},
    {'Q': 'I live ___ Moscow.', 'A': 'in'},
]

def main():
    print('Привет! Предлагаю проверить свои знания английского!\nНапиши, как тебя зовут.')
    username = input()
    print(f'Привет, {username.title()}, начнем тренировку!')
    test(username)

def word(score):
    return 'балл' if score == 1 else 'балла' if 2 <= score <= 4 else 'баллов'

def question(question, correct_answer):
    attempts = 0
    while attempts < 3:
        answer = input(question)
        if answer.strip().lower() == correct_answer.lower():
            score = 3 - attempts
            print(f'Ответ верный!\nВы получаете {score} {word(score)}!')
            return score
        else:
            attempts += 1
            if attempts < 3:
                print(f'Осталось попыток: {3 - attempts}, попробуй еще раз!')
    print(f'Увы, но нет. Верный ответ: {correct_answer}')
    return 0

    
def test(username):
    total_score = correct_answers = score = 0
    for i in answers:
        question_txt = i['Q']
        correct_answer_txt = i['A']
        score += question(question_txt, correct_answer_txt)
        total_score += score
        if score > 0:
            correct_answers += 1
    print(f'Вот и всё, {username.title()}!\nВы ответили на {correct_answers} вопросов из {len(answers)} верно')
    print(f'Вы заработали {score} {word(score)}')
    try: 
        per = (score / (correct_answers * 3)) * 100
        print(f'Это {per:.2f} процентов')
    except ZeroDivisionError:
        print('Это 0 процентов')
    
main()