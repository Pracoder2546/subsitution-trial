from datetime import datetime
import heapq

# ----------------- Step 0: Determine today -----------------
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
today_index = datetime.today().weekday()
if today_index > 4:
    today_index = 4  # fallback to Friday
current_day = days[today_index]

print(f"📅 Today is: {current_day}\n")

# ----------------- Step 1: Teacher timetable (5 days × 8 periods) -----------------
teachers = {
    'pratik': [
        ["6th-a","6th-b","7th-c","free","free","7th-b","6th-c","free"],
        ["6th-b","7th-c","6th-a","7th-b","free","6th-c","free","7th-a"],
        ["7th-c","6th-a","free","6th-b","7th-b","free","6th-c","7th-a"],
        ["6th-b","6th-c","7th-b","free","7th-a","free","6th-a","free"],
        ["6th-c","7th-b","6th-a","7th-c","free","free","6th-b","7th-a"],
    ],
    'aarna': [
        ["9th-a","free","8th-a","7th-c","free","7th-b","7th-c","8th-b"],  
        ["8th-a","9th-b","free","8th-c","9th-a","free","7th-b","8th-c"],  
        ["9th-c","8th-b","free","9th-a","7th-c","free","8th-b","7th-b"],  
        ["8th-a","9th-c","7th-b","8th-b","9th-a","free","7th-c","8th-c"],  
        ["7th-b","8th-c","9th-a","free","7th-c","8th-b","9th-b","7th-b"],  
    ],
    'syon': [
        ["9th-a","free","8th-a","7th-c","free","7th-b","7th-c","8th-b"],
        ["8th-a","9th-b","free","8th-c","9th-a","free","7th-b","8th-c"],
        ["9th-c","8th-b","free","9th-a","7th-c","free","8th-b","7th-b"],
        ["8th-a","9th-c","7th-b","8th-b","9th-a","free","7th-c","8th-c"],
        ["7th-b","8th-c","9th-a","free","7th-c","8th-b","9th-b","7th-b"],
    ],
    'ayushman': [
        ["8th-a","free","9th-b","9th-c","7th-a","free","free","8th-b"],
        ["9th-b","8th-c","7th-a","free","8th-b","9th-c","free","7th-c"],
        ["7th-a","9th-b","8th-c","7th-c","free","9th-b","8th-a","free"],
        ["8th-c","7th-a","9th-b","8th-b","7th-c","free","9th-a","free"],
        ["9th-b","8th-c","7th-a","free","9th-c","7th-b","8th-a","free"],
    ],
    'shreyansh': [
        ["free","free","7th-a","6th-a","free","8th-a","8th-c","free"],
        ["7th-b","6th-c","free","7th-c","6th-a","free","7th-b","8th-b"],
        ["6th-a","7th-b","free","6th-c","7th-a","free","6th-b","free"],
        ["7th-c","6th-b","8th-a","free","7th-b","6th-c","free","7th-a"],
        ["6th-b","7th-c","free","6th-a","7th-b","free","8th-c","7th-c"],
    ],
    'palak': [
        ["7th-b","7th-c","free","9th-a","free","free","free","8th-a"],
        ["7th-c","8th-a","9th-b","free","7th-a","8th-c","free","7th-b"],
        ["8th-a","7th-b","free","7th-c","9th-a","free","7th-b","8th-b"],
        ["7th-a","8th-c","7th-b","9th-b","free","free","8th-a","7th-c"],
        ["8th-b","7th-c","7th-a","free","8th-a","9th-b","free","7th-b"],
    ],
    'punya': [
        ["free","8th-b","free","free","6th-c","6th-a","7th-a","7th-b"],
        ["7th-a","free","8th-c","6th-b","7th-b","free","8th-a","free"],
        ["6th-c","7th-b","free","6th-a","7th-a","free","6th-b","8th-b"],
        ["free","7th-c","6th-a","free","7th-b","8th-c","6th-c","7th-a"],
        ["7th-b","6th-a","7th-c","6th-b","free","8th-a","free","7th-c"],
    ],
    'harshit': [
        ["9th-b","8th-c","9th-c","free","8th-a","free","free","free"],
        ["8th-a","9th-b","free","9th-c","8th-c","7th-b","free","9th-a"],
        ["9th-c","8th-a","9th-b","free","8th-b","9th-c","7th-a","free"],
        ["free","8th-c","7th-b","9th-a","free","9th-c","8th-b","7th-c"],
        ["9th-b","free","8th-a","7th-b","9th-c","free","8th-c","7th-a"],
    ],
    'daksh': [
        ["6th-b","7th-b","free","7th-c","free","9th-b","8th-a","free"],
        ["7th-a","6th-c","7th-b","free","6th-a","8th-b","7th-c","free"],
        ["6th-b","7th-c","free","8th-a","7th-a","6th-c","free","7th-b"],
        ["7th-b","6th-a","8th-c","free","7th-c","6th-b","8th-a","free"],
        ["6th-a","7th-b","free","7th-c","6th-b","8th-a","7th-c","free"],
    ],
    'jaadu': [
        ["free","7th-a","8th-b","8th-c","free","9th-c","free","9th-a"],
        ["8th-b","free","7th-a","9th-c","8th-a","free","9th-b","7th-c"],
        ["free","8th-c","9th-b","7th-a","free","8th-b","7th-c","9th-a"],
        ["7th-c","9th-b","free","8th-a","7th-a","9th-c","8th-b","free"],
        ["8th-a","free","7th-c","9th-b","8th-b","free","7th-a","9th-c"],
    ]
}

# present_teachers = ['syon','aarna','palak','harshit','pratik','daksh','jaadu']
# absent_teachers = ['punya','ayushman','shreyansh']

present_teachers = ['aarna','pratik','syon','jaadu','harshit','punya']
absent_teachers = ['shreyansh',"palak",'ayushman','daksh']


# ----------------- Step 2: Precompute free counts & free teachers per period -----------------
teacher_free_count = {}
period_free_teachers = {p: set() for p in range(8)}  # index 0-7

for t in present_teachers:
    day_schedule = teachers[t][today_index]
    free_count = 0
    for p, c in enumerate(day_schedule):
        if c == 'free':
            free_count += 1
            period_free_teachers[p].add(t)
    teacher_free_count[t] = free_count

# Track teacher load
teacher_load = {t: 0 for t in present_teachers}

# ----------------- Step 3: Substitution assignments using heap for fast max/tie-break -----------------
substitution_chart = []

for absent_teacher in absent_teachers:
    for period, class_name in enumerate(teachers[absent_teacher][today_index]):
        if class_name == 'free':
            continue

        # candidates for this period
        candidates = list(period_free_teachers[period])

        if not candidates:
            substitution_chart.append(f"Period {period+1}: No free teacher for {class_name} (was {absent_teacher}'s)")
            continue

        # use heap to choose teacher: max free periods, then min load
        heap = [(-teacher_free_count[t], teacher_load[t], t) for t in candidates]
        heapq.heapify(heap)
        _, _, chosen_teacher = heapq.heappop(heap)

        # assign
        substitution_chart.append(f"Period {period+1}: {chosen_teacher} will take {class_name} (was {absent_teacher}'s)")

        # update structures
        teachers[chosen_teacher][today_index][period] = 'assigned'
        teacher_free_count[chosen_teacher] -= 1
        teacher_load[chosen_teacher] += 1
        period_free_teachers[period].remove(chosen_teacher)

# ----------------- Step 4: Display timetable -----------------
timetable = {p: [] for p in range(1,9)}
for line in substitution_chart:
    period = int(line.split()[1].rstrip(':'))
    timetable[period].append(line)

print(f"🧾 Fair Substitution Timetable for {current_day}:")
for p in range(1,9):
    print(f"\nPeriod {p}:")
    if timetable[p]:
        for entry in timetable[p]:
            print("   ", entry.split(": ",1)[1])
    else:
        print("    No substitutions needed")
