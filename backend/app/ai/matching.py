def calculate_match(user1_skills, user2_skills):

    if not user1_skills or not user2_skills:
        return 0

    skills1 = set(user1_skills.lower().split(","))
    skills2 = set(user2_skills.lower().split(","))

    common_skills = skills1.intersection(skills2)

    total_skills = skills1.union(skills2)

    score = (len(common_skills) / len(total_skills)) * 100

    return round(score, 2)