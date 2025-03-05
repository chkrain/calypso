import random

def get_words(filename):
    """
    Получение списка слов из файла
    :param filename: имя файла со словами, каждое слово с новой строки
    :return:
    """
    with open(filename, 'r') as file:
        words = []
        for word in file:
            words.append(word.strip())
    return words


def mix(word):
    """
    Функция перемешивания букв в слове
    :param word: слово для перемешивания букв, тип string
    :return mixed_word: тип string
    """
    lst = list(word.lower())
    random.shuffle(lst)
    mixed_word = "".join(lst)
    return mixed_word


def write_to_file(filename, user_name, score):
    """
    Функция записи статистики в файл
    :param filename: имя файла для записи, тип string
    :param user_name: имя игрока, тип string
    :param score: набранные очки, тип integer
    :return:
    """
    with open(filename, 'a', encoding='utf-8') as file:
        file.write(f'{user_name}:{score}\n')
    return


def get_statistic(filename):
    """
    Получение статистики игр из файла. Определется количество игр и макисимальный результат.
    :param filename: имя файла со статистикой, тип str
    :return total_games, max_score: всего игр и рекорд по очкам
    """
    with open(filename, 'r') as file:
        total_games = 0
        max_score = 0
        for line in file:
            if line.count(':') < 1:
                continue
            total_games += 1
            user_name, score = line.strip().split(':')
            if int(score) > max_score:
                max_score = int(score)
    return total_games, max_score


# объявление переменных
statistic = 'hystory.txt'
questions = 'words.txt'
score = 0

user_name = input('Введите ваше имя: ')

# основное тело программы, перебор всех слов из файла
words = get_words(questions)
for word in words:
    mixed_word = mix(word)
    print(f'Угадайте слово: {mixed_word}')
    user_word = input()
    if user_word.lower() == word.lower():
        score += 10
        print(f'Верно! Вы получаете 10 очков')
    else:
        print(f'Неверно! Верный ответ - {word}')

# запись и вывод статистики
write_to_file(statistic, user_name, score)
total_games, max_score = get_statistic(statistic)
print(f'Всего сыграно игр: {total_games}\nМаксимальный рекорд: {max_score}')
