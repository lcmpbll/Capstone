# Dog Bark / Capstone

## By Liam Campbell

_A React webpage that helps users have a positive dog park experience._ 

### Table of Contents

[Technologies Used](#technologies-used)  

[Capstone Proposal](#capstone-proposal)
 
[Description](#description)
 
[React Map](#react-map)

[Setup/Installation Requirements](#setup-and-installation-requirements)

[React planning map](#react-map)

[Reasearch and Planning Log](#research-and-planning) 

[Known Bugs](#known-bugs) 
 
[License](#License)

## Technologies used
* React
* Javascript
* AWS DynamoDB
* AWS amplify
* AWS graphql
* JSX
* draw.io

## Capstone Proposal 

_This project aims to make it easier to take your dog to the dog park by helping your dog to make friends. Here is the full [capstone proposal](./CapstonePropsal.md)._

![Main app image.](src/Img/applicationDemo.png)

### Background image Attribution

<pre>
<a href="https://www.vecteezy.com/free-vector/madeira">Madeira Vectors by Vecteezy</a>
<a href="https://www.vecteezy.com/free-vector/dog-park">Dog Park Vectors by Vecteezy</a>
</pre>

## Description 

_This is a react based application that allows the user to create a dog, set it's traits such as weight, name, gender, age, likes and dislikes. The information is then stored in a AWS dynamodb table. The dog can then be interacted with, it can name other dogs as it's friends and declare it is going to the park. Other users can then see which dogs are at the park and decide wether to take their dogs as well._ 

## React Map

![project diagram](Capstonediagram.drawio.png)

## Setup and installation Requirements

<details>
<summary>Setup</summary>
* Fork this repsitory from github: https://github.com/lcmpbll/Capstone to your desktop

* Navigate to the top level of the directory.

* In your terminal `$npm install`

* Set up an AWS service account. Create a free account [here](https://aws.amazon.com/free/?trk=fce796e8-4ceb-48e0-9767-89f7873fac3d&sc_channel=ps&s_kwcid=AL!4422!3!592542020599!e!!g!!aws&ef_id=Cj0KCQjw1vSZBhDuARIsAKZlijR_PojG3JT5EPtzKwuKZigQwvzsbjQIr83oSXeJWAZ9t2wuV1_JA0caAhWKEALw_wcB:G:s&s_kwcid=AL!4422!3!592542020599!e!!g!!aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)


* I followed [these](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/) instructions 

- * Log in to the [AWS management console](https://us-west-2.console.aws.amazon.com/console/)

- * Select AWS amplify getting started. 

- * Select your github repo for this project. 

- * Select the repository branch for this project. 

- * Accept default settings.



</details>

<details>
<summary>Available Scripts</summary>
</details>

## Research and planning

<details>

<summary><strong>Research log</strong></summary>

>### 9/16/22  3hr
>
>> 2p - 2:30
>
>_Read thinking in React._
>
>> 2:30 - 3p
>
>_Research Hooks_
>
>> 3p - 4p
>
>_Research hook side effects_
>
>> 4p - 5p
>
>_Research NoSQL_
>
>### 9/17/22 2hr / 5hr total
>
>> 9a - 10a 
>
>_Continue reasearching NoSQL_
>
>> 10a - 11a
>
>_Read about differences between Firebase and AWS_
>
>### 9/18/22 3hr / 8hr total
>
>> 930a - 10:15a
>
>_Research NoSQL data structure/ differences between SQL and NoSQL._ 
>
>> 10:15a - 10:45a
>
>_Write up capstone proposal, can be found [here](https://docs.google.com/document/d/1yxRCpg8vTEHJAs1Qay7uP65t-RreGbJPicOqEb2ECiM/edit?usp=sharing)_
>
> 10:45 - 11:45
>
>>_Make diagram_
>
>11:45 - 1230
>
>> _Build Dog, DogList, DogParkControl basic structure_
>
>### 9/21/22 8hrs / 16 hrs total
>
>> _Working in app, can create, new dogs with traits, and delete them, can send them to the park._
>
>### 9/24/22 2hrs / 18 hrs total
>
>2p - 4p
>
>> _AWS tutorial, add amplify, display list, use api to call to database, still working on this tutorial, should be able to host images but they are just popping up as broken img files._ 
>
>### 9/27/22 1 hr / 19 hrs total
>
>7p - 8p
>
>>Read about users in Amplify, set up at the park list.
>
>### 9/30/22 3 hrs / 22 hrs total
>
>7:15a - 10:15a 
>
>> _Plan for day, refocus on MVP_
>
> - [x] A user can enter information about their dog, i.e. size, name. likes and dislikes...
>
> - [x] A user can say they are taking their dog to the park
>
> - [x] A user can list other dogs as their dog's friends and see when they are at the park.
>   
>   - [x] Add element to dogs that will take an array of the dog's friend's ids.
>   - [x] Have a spot to display this array.
>
>
>### 10/2/22 2 hrs/ 24 hrs total
>
> 8:15p - 10:15 
>
> - [x] _Impliment AWS, amplify, dynamodb_

</details>

## Known Bugs/ WIPs

* Impliment owners for dogs. 
* Add dog park information.
* Allow dogs to leave the dog park. 

## License

[Copyright](LICENSE) (c) 10/05/2022 Liam Campbell

## Contact Information 

_Feel free to reach out via [github](https://github.com/lcmpbll)_




