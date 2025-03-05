from morse import MORSE_DICT, words
import random

def morse_converter(text):
    return ' '.join(MORSE_DICT.get(char.upper(), '') for char in text if char.upper() in MORSE_DICT)

def main(words):
    score = 0
    input('Сегодня мы потренируемся расшифровывать азбуку Морзе\nНажмите Enter и начнём\n')
    
    while True:
        try:
            count = int(input(f'Сколько слов в тесте вы хотите увидеть? Максимальное количество - {len(words)}\n'))
            if count < 1 or count > len(words):
                print(f'Введите число от 1 до {len(words)}, а не {count}, откуда это вообще взялось?')
                continue
            break
        except ValueError:
            count = random.randint(1, len(words))
            print(f'Вы ввели не число, поэтому количество слов будет определено рандомно.\nВас ждет тест из {count} пунктов')
            break
        
    for i in range(count):
        word = random.choice(words)
        morse_word = morse_converter(word)
        answer = input(f'Слово {i + 1}: {morse_word}\n')
        
        if answer.lower() == word:
            print(f'Верно, {word}!')
            score += 1
        else:
            print(f'Неверно, {word}')
            
    print(f'Всего задачек: {count}\nОтвечено верно: {score}\nОтвечено неверно: {count - score}')
    
main(words)